import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2107Component } from './test-component2107.component';

describe('TestComponent2107Component', () => {
  let component: TestComponent2107Component;
  let fixture: ComponentFixture<TestComponent2107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
