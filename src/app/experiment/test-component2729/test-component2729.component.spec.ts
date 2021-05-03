import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2729Component } from './test-component2729.component';

describe('TestComponent2729Component', () => {
  let component: TestComponent2729Component;
  let fixture: ComponentFixture<TestComponent2729Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2729Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
