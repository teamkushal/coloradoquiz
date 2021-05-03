import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent308Component } from './test-component308.component';

describe('TestComponent308Component', () => {
  let component: TestComponent308Component;
  let fixture: ComponentFixture<TestComponent308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
