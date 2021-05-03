import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1952Component } from './test-component1952.component';

describe('TestComponent1952Component', () => {
  let component: TestComponent1952Component;
  let fixture: ComponentFixture<TestComponent1952Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1952Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
