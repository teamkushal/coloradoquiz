import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent516Component } from './test-component516.component';

describe('TestComponent516Component', () => {
  let component: TestComponent516Component;
  let fixture: ComponentFixture<TestComponent516Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent516Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
