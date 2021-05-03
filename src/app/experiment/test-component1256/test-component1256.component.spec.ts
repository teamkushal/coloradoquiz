import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1256Component } from './test-component1256.component';

describe('TestComponent1256Component', () => {
  let component: TestComponent1256Component;
  let fixture: ComponentFixture<TestComponent1256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
