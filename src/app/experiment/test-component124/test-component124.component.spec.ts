import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent124Component } from './test-component124.component';

describe('TestComponent124Component', () => {
  let component: TestComponent124Component;
  let fixture: ComponentFixture<TestComponent124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
