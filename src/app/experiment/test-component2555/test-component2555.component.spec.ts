import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2555Component } from './test-component2555.component';

describe('TestComponent2555Component', () => {
  let component: TestComponent2555Component;
  let fixture: ComponentFixture<TestComponent2555Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2555Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
