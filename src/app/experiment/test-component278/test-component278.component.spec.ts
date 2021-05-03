import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent278Component } from './test-component278.component';

describe('TestComponent278Component', () => {
  let component: TestComponent278Component;
  let fixture: ComponentFixture<TestComponent278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent278Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
