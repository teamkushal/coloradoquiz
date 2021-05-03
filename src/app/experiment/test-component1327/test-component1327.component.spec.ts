import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1327Component } from './test-component1327.component';

describe('TestComponent1327Component', () => {
  let component: TestComponent1327Component;
  let fixture: ComponentFixture<TestComponent1327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1327Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
