import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent971Component } from './test-component971.component';

describe('TestComponent971Component', () => {
  let component: TestComponent971Component;
  let fixture: ComponentFixture<TestComponent971Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent971Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
