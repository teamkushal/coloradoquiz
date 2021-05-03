import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1586Component } from './test-component1586.component';

describe('TestComponent1586Component', () => {
  let component: TestComponent1586Component;
  let fixture: ComponentFixture<TestComponent1586Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1586Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
