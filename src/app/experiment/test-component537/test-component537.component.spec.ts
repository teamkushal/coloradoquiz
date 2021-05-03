import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent537Component } from './test-component537.component';

describe('TestComponent537Component', () => {
  let component: TestComponent537Component;
  let fixture: ComponentFixture<TestComponent537Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent537Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
