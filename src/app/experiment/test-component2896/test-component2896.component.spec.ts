import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2896Component } from './test-component2896.component';

describe('TestComponent2896Component', () => {
  let component: TestComponent2896Component;
  let fixture: ComponentFixture<TestComponent2896Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2896Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
