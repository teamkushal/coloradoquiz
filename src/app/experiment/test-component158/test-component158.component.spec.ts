import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent158Component } from './test-component158.component';

describe('TestComponent158Component', () => {
  let component: TestComponent158Component;
  let fixture: ComponentFixture<TestComponent158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
