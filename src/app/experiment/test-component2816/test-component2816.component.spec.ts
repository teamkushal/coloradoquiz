import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2816Component } from './test-component2816.component';

describe('TestComponent2816Component', () => {
  let component: TestComponent2816Component;
  let fixture: ComponentFixture<TestComponent2816Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2816Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
