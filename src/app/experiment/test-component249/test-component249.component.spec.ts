import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent249Component } from './test-component249.component';

describe('TestComponent249Component', () => {
  let component: TestComponent249Component;
  let fixture: ComponentFixture<TestComponent249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
