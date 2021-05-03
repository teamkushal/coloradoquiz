import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1071Component } from './test-component1071.component';

describe('TestComponent1071Component', () => {
  let component: TestComponent1071Component;
  let fixture: ComponentFixture<TestComponent1071Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1071Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
