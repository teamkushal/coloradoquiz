import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent96Component } from './test-component96.component';

describe('TestComponent96Component', () => {
  let component: TestComponent96Component;
  let fixture: ComponentFixture<TestComponent96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
