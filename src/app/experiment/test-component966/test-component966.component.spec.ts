import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent966Component } from './test-component966.component';

describe('TestComponent966Component', () => {
  let component: TestComponent966Component;
  let fixture: ComponentFixture<TestComponent966Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent966Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
