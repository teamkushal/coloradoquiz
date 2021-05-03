import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent703Component } from './test-component703.component';

describe('TestComponent703Component', () => {
  let component: TestComponent703Component;
  let fixture: ComponentFixture<TestComponent703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent703Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
