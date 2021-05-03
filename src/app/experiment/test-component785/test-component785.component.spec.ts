import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent785Component } from './test-component785.component';

describe('TestComponent785Component', () => {
  let component: TestComponent785Component;
  let fixture: ComponentFixture<TestComponent785Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent785Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
