import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2091Component } from './test-component2091.component';

describe('TestComponent2091Component', () => {
  let component: TestComponent2091Component;
  let fixture: ComponentFixture<TestComponent2091Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2091Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
