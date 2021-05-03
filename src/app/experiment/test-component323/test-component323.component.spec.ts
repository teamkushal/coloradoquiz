import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent323Component } from './test-component323.component';

describe('TestComponent323Component', () => {
  let component: TestComponent323Component;
  let fixture: ComponentFixture<TestComponent323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent323Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
