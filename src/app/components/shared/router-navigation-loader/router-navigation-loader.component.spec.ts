import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavigationLoaderComponent } from './router-navigation-loader.component';

describe('RouterNavigationLoaderComponent', () => {
  let component: RouterNavigationLoaderComponent;
  let fixture: ComponentFixture<RouterNavigationLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterNavigationLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterNavigationLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
