import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent194Component } from './test-component194.component';

describe('TestComponent194Component', () => {
  let component: TestComponent194Component;
  let fixture: ComponentFixture<TestComponent194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
