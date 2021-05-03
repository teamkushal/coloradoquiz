import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2206Component } from './test-component2206.component';

describe('TestComponent2206Component', () => {
  let component: TestComponent2206Component;
  let fixture: ComponentFixture<TestComponent2206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
