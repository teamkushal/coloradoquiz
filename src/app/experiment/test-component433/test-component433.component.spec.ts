import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent433Component } from './test-component433.component';

describe('TestComponent433Component', () => {
  let component: TestComponent433Component;
  let fixture: ComponentFixture<TestComponent433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent433Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
