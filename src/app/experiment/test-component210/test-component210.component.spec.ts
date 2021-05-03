import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent210Component } from './test-component210.component';

describe('TestComponent210Component', () => {
  let component: TestComponent210Component;
  let fixture: ComponentFixture<TestComponent210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
