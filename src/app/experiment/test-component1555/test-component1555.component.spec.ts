import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1555Component } from './test-component1555.component';

describe('TestComponent1555Component', () => {
  let component: TestComponent1555Component;
  let fixture: ComponentFixture<TestComponent1555Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1555Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
