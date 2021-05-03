import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent508Component } from './test-component508.component';

describe('TestComponent508Component', () => {
  let component: TestComponent508Component;
  let fixture: ComponentFixture<TestComponent508Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent508Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
