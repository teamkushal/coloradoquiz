import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent166Component } from './test-component166.component';

describe('TestComponent166Component', () => {
  let component: TestComponent166Component;
  let fixture: ComponentFixture<TestComponent166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
