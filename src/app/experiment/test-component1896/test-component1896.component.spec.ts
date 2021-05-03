import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1896Component } from './test-component1896.component';

describe('TestComponent1896Component', () => {
  let component: TestComponent1896Component;
  let fixture: ComponentFixture<TestComponent1896Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1896Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
