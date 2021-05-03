import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2554Component } from './test-component2554.component';

describe('TestComponent2554Component', () => {
  let component: TestComponent2554Component;
  let fixture: ComponentFixture<TestComponent2554Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2554Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
