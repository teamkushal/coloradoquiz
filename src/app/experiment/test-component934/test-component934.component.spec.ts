import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent934Component } from './test-component934.component';

describe('TestComponent934Component', () => {
  let component: TestComponent934Component;
  let fixture: ComponentFixture<TestComponent934Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent934Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
