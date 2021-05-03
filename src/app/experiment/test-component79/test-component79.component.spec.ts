import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent79Component } from './test-component79.component';

describe('TestComponent79Component', () => {
  let component: TestComponent79Component;
  let fixture: ComponentFixture<TestComponent79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
