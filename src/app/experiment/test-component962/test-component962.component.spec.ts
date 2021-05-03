import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent962Component } from './test-component962.component';

describe('TestComponent962Component', () => {
  let component: TestComponent962Component;
  let fixture: ComponentFixture<TestComponent962Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent962Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
