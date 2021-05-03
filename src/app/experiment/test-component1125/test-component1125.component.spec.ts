import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1125Component } from './test-component1125.component';

describe('TestComponent1125Component', () => {
  let component: TestComponent1125Component;
  let fixture: ComponentFixture<TestComponent1125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
