import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent275Component } from './test-component275.component';

describe('TestComponent275Component', () => {
  let component: TestComponent275Component;
  let fixture: ComponentFixture<TestComponent275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent275Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
