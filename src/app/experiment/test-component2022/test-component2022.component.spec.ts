import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2022Component } from './test-component2022.component';

describe('TestComponent2022Component', () => {
  let component: TestComponent2022Component;
  let fixture: ComponentFixture<TestComponent2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
