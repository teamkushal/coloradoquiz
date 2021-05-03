import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent452Component } from './test-component452.component';

describe('TestComponent452Component', () => {
  let component: TestComponent452Component;
  let fixture: ComponentFixture<TestComponent452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent452Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
