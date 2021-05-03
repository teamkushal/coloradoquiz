import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2504Component } from './test-component2504.component';

describe('TestComponent2504Component', () => {
  let component: TestComponent2504Component;
  let fixture: ComponentFixture<TestComponent2504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2504Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
