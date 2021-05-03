import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent753Component } from './test-component753.component';

describe('TestComponent753Component', () => {
  let component: TestComponent753Component;
  let fixture: ComponentFixture<TestComponent753Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent753Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
