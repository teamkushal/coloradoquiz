import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent941Component } from './test-component941.component';

describe('TestComponent941Component', () => {
  let component: TestComponent941Component;
  let fixture: ComponentFixture<TestComponent941Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent941Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
