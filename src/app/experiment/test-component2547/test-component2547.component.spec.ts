import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2547Component } from './test-component2547.component';

describe('TestComponent2547Component', () => {
  let component: TestComponent2547Component;
  let fixture: ComponentFixture<TestComponent2547Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2547Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
