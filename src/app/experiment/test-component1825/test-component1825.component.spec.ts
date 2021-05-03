import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1825Component } from './test-component1825.component';

describe('TestComponent1825Component', () => {
  let component: TestComponent1825Component;
  let fixture: ComponentFixture<TestComponent1825Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1825Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
