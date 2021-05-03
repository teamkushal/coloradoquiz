import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent504Component } from './test-component504.component';

describe('TestComponent504Component', () => {
  let component: TestComponent504Component;
  let fixture: ComponentFixture<TestComponent504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent504Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
