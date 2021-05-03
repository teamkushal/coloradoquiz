import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent856Component } from './test-component856.component';

describe('TestComponent856Component', () => {
  let component: TestComponent856Component;
  let fixture: ComponentFixture<TestComponent856Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent856Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
