import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent976Component } from './test-component976.component';

describe('TestComponent976Component', () => {
  let component: TestComponent976Component;
  let fixture: ComponentFixture<TestComponent976Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent976Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
