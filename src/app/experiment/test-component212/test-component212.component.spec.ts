import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent212Component } from './test-component212.component';

describe('TestComponent212Component', () => {
  let component: TestComponent212Component;
  let fixture: ComponentFixture<TestComponent212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
