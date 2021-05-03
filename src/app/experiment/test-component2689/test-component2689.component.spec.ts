import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2689Component } from './test-component2689.component';

describe('TestComponent2689Component', () => {
  let component: TestComponent2689Component;
  let fixture: ComponentFixture<TestComponent2689Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2689Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
